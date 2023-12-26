import Superhero from './character';
import Ability from './abilities';
import { DamagePoints } from './types';

class MagicSuperhero implements Superhero<Ability> {
  name: string;
  health: number;
  ability: Ability;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.ability = Ability.Attack;
  }

  attack(target: Superhero<number>, attackType?: Ability): void {
    const damagePoints: DamagePoints = 20;
    target.health -= (attackType || this.ability) === Ability.Attack ? damagePoints : 0;
    console.log(`${this.name} attacks ${target.name} and deals ${damagePoints} points of damage.`);
  }

  defend(defenseType?: Ability): void {
    console.log(`${this.name} uses a magical shield and defends.`);
  }
}

export default MagicSuperhero;
