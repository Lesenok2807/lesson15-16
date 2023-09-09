'use sctrict';

class First {
     constructor(text) {
          this.text = text;
     }

     hello() {
          console.log('Привет я метод родителя!');
     }
}

class Second extends First {
     constructor(text, skills = []) {
          super(text)
          this.skills = skills;
          console.log(text);
     }
}

const third = new Second('А я наследуемый метод!');

third.hello();