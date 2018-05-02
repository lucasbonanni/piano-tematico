import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';

/*
  Generated class for the SoundProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SoundProvider {

  private starWarsSounds: Array<string>;
  private mortalKombatSounds: Array<string>;
  private recordedSecuence: Array<string>;

  constructor(private nativeAudio: NativeAudio) {
    this.initializeStarWarsSounds();
    this.initializeMortalKombatSounds();
    this.initializeSecuence();
  }

  private initializeMortalKombatSounds() {
    this.mortalKombatSounds = new Array<string>();
    this.mortalKombatSounds.push('MK-You-Choose');
    this.mortalKombatSounds.push('MK-Finish-Him');
    this.mortalKombatSounds.push('MK-Scorpion');
    this.preloadSounds(this.mortalKombatSounds);
  }

  private initializeStarWarsSounds() {
    this.starWarsSounds = new Array<string>();
    this.starWarsSounds.push('SW-DV-YMM');
    this.starWarsSounds.push('SW-D');
    this.starWarsSounds.push('SW-Stormtrooper-RF');
    this.preloadSounds(this.starWarsSounds);
  }

  private initializeSecuence() {
    this.recordedSecuence = new Array<string>();
  }

  private preloadSounds(soundsNames: Array<string>){
    for (let index = 0; index < soundsNames.length; index++) {
      const path = 'assets/sounds/' + soundsNames[index] + '.mp3'
      this.nativeAudio.preloadSimple(soundsNames[index],path);
    }
  }

  getstarWarsSounds(){
    return this.starWarsSounds;
  }

  getmortalKombatSounds(){
    return this.starWarsSounds;
  }

  playrecordedSecuence(){
    for (let index = 0; index < this.recordedSecuence.length; index++) {
      this.playSound(this.recordedSecuence[index]);
    }
  }

  addToSecuence(soundName:string){
    this.recordedSecuence.push(soundName);
  }

  clearSecuence(){
    this.initializeSecuence();
  }

  playSound(soundName:string){
    this.nativeAudio.play(soundName);
  }

}
