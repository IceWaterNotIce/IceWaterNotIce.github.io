<template>
  <div id="AnswerTransfer">
    <label for="review"> Copy the review html code here (<code>&#65308;form ...&#65310;...&#65308;/form&#65310;</code>):
    </label>
    <input type="text" id="review" />
    <label for="attempt"> Copy the attempt html code here (<code>&#65308;form ...&#65310;...&#65308;/form&#65310;</code>):
    </label>
    <input type="text" id="attempt" />
    <button id="convert">Convert</button>
    <div id="converted_shell">
      <label for="converted"> Converted attempt html code will be here
        (<code>&#65308;form ...&#65310;...&#65308;/form&#65310;</code>): </label>
      <div>
        <input type="text" id="converted" />
        <button id="copy">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerTransfer',
  props: {
  },
  methods: {
  },
  mounted: function () {
    this.$nextTick(function () {
      function convert() {
        //create a ele to store the html code
        let review = document.createElement('div');
        review.innerHTML = document.getElementById('review').value;
        let attempt = document.createElement('div');
        attempt.innerHTML = document.getElementById('attempt').value;

        //find all the inputs eles with class 'que multianswer deferredfeedback complete'
        let review_inputs = review.getElementsByClassName('form-control mb-1');
        let attempt_inputs = attempt.getElementsByClassName('form-control mb-1');
        console.log(review_inputs.length, attempt_inputs.length);
        for (let i = 0; i < attempt_inputs.length; i++) {
          //get the value of the input
          attempt_inputs[i].setAttribute('value', review_inputs[i].value);
          console.log(attempt_inputs[i].value, review_inputs[i].value);
          console.log(attempt.getElementsByClassName('form-control mb-1')[i]);
        }

        let copyText = document.getElementById("converted");
        console.log(attempt);
        copyText.value = attempt.innerHTML;
        copy();
      }
      function copy() {
        let copyText = document.getElementById("converted");
        copyText.select();
        document.execCommand("copy");
      }
      document.getElementById('convert').addEventListener('click', convert);
      document.getElementById('copy').addEventListener('click', copy);
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#AnswerTransfer {
  margin: 0 auto;
  width: 80%;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  text-align: left;
}

div#Converted_shell>div {
  margin: 0 auto;
  width: 80%;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  display: flex;
  text-align: left;



}

input#converted {
  width: 70%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #ccc;
  border-radius: 0.5em;
}

button#copy {
  width: 27%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button#convert {
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

input#review,
input#attempt {
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #ccc;
  border-radius: 0.5em;
}
</style>
