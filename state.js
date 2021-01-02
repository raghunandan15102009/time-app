class State {
  constructor() {
    this.button1 = createButton('teacher');
    this.button2 = createButton('student');
    this.input1 = createInput('Task1');
    this.input2 = createInput('Task2');
    this.input3 = createInput('Task3');
    this.input4 = createInput('Task4');
    this.input5 = createInput('Task5');
    this.apply = createButton('apply');
    this.input6=createInput('wakeTime');
    this.input7=createInput('sleepTime');
    this.input8=createInput('time Spent');
    this.input9=createInput('time Spent');
    this.input10=createInput('time Spent');
    this.input11=createInput('time Spent');
    this.input12=createInput('time Spent');
    this.greeting1 = createElement('h2');
  }
  hide() {
    this.button1.hide();
    this.button2.hide();
    form.hide();
  }
  display() {
    this.update();
    this.button1.position(200, 200);
    this.button2.position(600, 200);
    this.button1.mousePressed(() => {
      this.hide();
      this.input1.position(600, 350);
      this.input2.position(600, 300);
      this.input3.position(600, 250);
      this.input4.position(600, 200);
      this.input5.position(600, 150);
    })
    this.button2.mousePressed(()=>{
      this.input6.position();
      this.input7.position();
      this.input8.position();
      this.input9.position();
      this.input10.position();
      this.input11.position();
      this.input12.position();
    })
    if ((this.input1 !== null && this.input2 !== null && this.input3 !== null && this.input4 !== null && this.input5 !== null) && this.apply.mousePressed) {
      this.greeting1.html("Yay tasks are assigned to the student");
      this.greeting1.position();
    }
  }
  update() {
    console.log(this.input1);
    database.ref("/tasks").set({
      task1: this.input1.elt.value
    })
    database.ref("/tasks").set({
      task2: this.input2.elt.value
    })
    database.ref("/tasks").set({
      task3: this.input3.elt.value
    })
    database.ref("/tasks").set({
      task4: this.input4.elt.value
    })
    database.ref("/tasks").set({
      task5: this.input5.elt.value
    })
  }
}