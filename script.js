'use sctrict';

class First {
     constructor(text) {
          this.text = text;
     }

     hello() {
          console.log(`${this.text}`);
     }
}

class Second extends First {
     constructor(text, skills = []) {
          super(text)
          this.skills = skills;
          // console.log('А я наследуемый метод!');
     }
     sayHello() {
          super.hello();
          console.log('А я наследуемый метод!')
     }
}

const third = new Second('Привет я метод родителя!');


third.sayHello();