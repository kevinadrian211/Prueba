interface Superhero<T> {
  name: string;
  health: number;
  attack: (target: Superhero<number>, attackType?: T) => void;
  defend: (defenseType?: T) => void;
  ability: T;
}

export default Superhero;
