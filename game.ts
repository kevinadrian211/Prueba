import * as readlineSync from 'readline-sync';
import MagicSuperhero from './magicSuperhero';
import StrengthSuperhero from './strengthSuperhero';
import Superhero from './character';
import Ability from './abilities';

function battle(superhero1: Superhero<any>, superhero2: Superhero<any>): void {
  const startingHero = chooseStartingHero(superhero1, superhero2);
  const waitingHero = startingHero === superhero1 ? superhero2 : superhero1;

  console.log(`Comienza la batalla entre ${superhero1.name} y ${superhero2.name}.`);
  console.log(`${startingHero.name} inicia la pelea.`);

  while (superhero1.health > 0 && superhero2.health > 0) {
    performTurn(startingHero, waitingHero);
    if (waitingHero.health <= 0) break;
    performTurn(waitingHero, startingHero);
  }

  if (superhero1.health <= 0) {
    console.log(`${superhero1.name} ha sido derrotado. ¡${superhero2.name} es el ganador!`);
  } else {
    console.log(`${superhero2.name} ha sido derrotado. ¡${superhero1.name} es el ganador!`);
  }
}

function performTurn(attacker: Superhero<any>, defender: Superhero<any>): void {
  const action = readlineSync.keyInSelect(['Atacar', 'Defender'], `¿Qué acción realizará ${attacker.name}?`);

  if (action === 0) {
    const attackType = readlineSync.keyInSelect(Object.values(Ability), `¿Qué tipo de ataque usará ${attacker.name}?`);
    attacker.attack(defender, Object.values(Ability)[attackType]);
    console.log(`${attacker.name} ha atacado a ${defender.name}.\n`);
  } else {
    defender.defend();
    console.log(`${defender.name} ha decidido defenderse.\n`);
  }

  console.log(`${attacker.name} tiene ${attacker.health} puntos de salud.`);
  console.log(`${defender.name} tiene ${defender.health} puntos de salud.\n`);
}

function chooseStartingHero(hero1: Superhero<any>, hero2: Superhero<any>): Superhero<any> {
  const options = [hero1.name, hero2.name];
  const index = readlineSync.keyInSelect(options, '¿Quién inicia la pelea?');
  return index === 0 ? hero1 : hero2;
}

const wizard = new MagicSuperhero('Mago', 100);
const warrior = new StrengthSuperhero('Guerrero', 100);

battle(wizard, warrior);
