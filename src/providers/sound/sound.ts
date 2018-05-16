import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';

/*
  Generated class for the SoundProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SoundProvider {

  private counterStrikeSounds: Array<string> = [];
  private marioBrossSounds: Array<string> = [];
  private mortalKombatSounds: Array<string> = [];
  private recordedSecuence: Array<string> = [];

  constructor(private nativeAudio: NativeAudio, private platform: Platform) {
    this.initializeMarioBrossSounds();
    this.initializeMortalKombatSounds();
    this.initializeCSSounds();
    this.initializeSecuence();
  }

  private initializeMortalKombatSounds() {
    this.mortalKombatSounds = new Array<string>();
    this.mortalKombatSounds.push('MK_Fight');
    this.mortalKombatSounds.push('MK_Finish_Him');
    this.mortalKombatSounds.push('MK_Kahn_Laughing');
    this.mortalKombatSounds.push('MK_Kahn_Prepare_To_Die');
    this.mortalKombatSounds.push('MK_Scorpion');
    this.preloadSounds(this.mortalKombatSounds);
  }

  private initializeMarioBrossSounds() {
    this.marioBrossSounds = new Array<string>();
    this.marioBrossSounds.push('SMB3_Coin');
    this.marioBrossSounds.push('SMB3_Die');
    this.marioBrossSounds.push('SMB3_Jump');
    this.marioBrossSounds.push('SMB3_Power_Down');
    this.marioBrossSounds.push('SMB3_Power_Up');
    this.preloadSounds(this.marioBrossSounds);
  }


  private initializeCSSounds() {
    this.counterStrikeSounds = new Array<string>();
    this.counterStrikeSounds.push('CS_Bomb_Has_Been_Planted');
    this.counterStrikeSounds.push('CS_Cover_Me');
    this.counterStrikeSounds.push('CS_Enemy_Down');
    this.counterStrikeSounds.push('CS_Follow_Me');
    this.counterStrikeSounds.push('CS_Go_Go_Go');
    this.preloadSounds(this.counterStrikeSounds);
  }

  private initializeSecuence() {
    this.recordedSecuence = new Array<string>();
  }

  private preloadSounds(soundsNames: Array<string>) {
    if (this.platform.is('android')) {
      for (let index = 0; index < soundsNames.length; index++) {
        const path = 'assets/sounds/' + soundsNames[index] + '.mp3'
        this.nativeAudio.preloadSimple(soundsNames[index], path).catch(reason => alert(reason));
        this.nativeAudio.setVolumeForComplexAsset(soundsNames[index], 1.0);
      }
    }

  }

  getMarioBrossSounds() {
    return this.marioBrossSounds;
  }

  getMortalKombatSounds() {
    return this.mortalKombatSounds;
  }

  getCounterStrikeSounds() {
    return this.counterStrikeSounds;
  }

  playrecordedSecuence() {
    for (let index = 0; index < this.recordedSecuence.length; index++) {
      this.playSound(this.recordedSecuence[index]);
    }
  }

  addToSecuence(soundName: string) {
    this.recordedSecuence.push(soundName);
  }

  clearSecuence() {
    this.initializeSecuence();
  }

  playSound(soundName: string) {
    this.nativeAudio.play(soundName).catch(reason => alert(reason));
  }

}
