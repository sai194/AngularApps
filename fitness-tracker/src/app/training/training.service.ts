import {Exercise} from "./exercise.model";
import {Subject} from "rxjs";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from "@angular/core";

@Injectable()
export class TrainingService {

  exerciseChanged = new Subject<Exercise>();

  url = 'http://localhost:3000/exercises';

  private availableExercises: Exercise[] = [];

  private runningExercise: Exercise;

  private exercises: Exercise[] = [];

  private areExercisesLoaded = false;

  constructor(private httpClient: HttpClient) {
  }

  getAvailableExercises() {

    if(!this.areExercisesLoaded) {
      this.httpClient.get<Exercise[]>(this.url + '/lookup')
        .pipe(catchError(this.handleError))
        .subscribe(data => {this.availableExercises = data;})
        ;
    }

    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  completeExercise() {
    this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.exercises.push({...this.runningExercise,
      date: new Date(),
      state: 'cancelled',
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100)
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getPastExercises() {
    return this.exercises.slice();
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
