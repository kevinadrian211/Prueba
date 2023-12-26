import Superhero from './character';
import Ability from './abilities';
import { DamagePoints } from './types';

class StrengthSuperhero implements Superhero<Ability> {
  name: string;
  health: number;
  ability: Ability;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.ability = Ability.Defense;
  }

  attack(target: Superhero<any>, attackType?: Ability): void {
    const damagePoints: DamagePoints = 20;
    target.health -= (attackType || this.ability) === Ability.Attack ? damagePoints : 0;
    console.log(`${this.name} delivers a strong blow to ${target.name} causing ${damagePoints} points of damage.`);
  }

  defend(defenseType?: Ability): void {
    console.log(`${this.name} prepares to receive the attack.`);
  }
}

export default StrengthSuperhero;
