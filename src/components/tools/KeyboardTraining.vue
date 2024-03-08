<template>
    <p id="training-content">
        <span class="typed-content"></span>
        <template v-for="(word, index) in word_data" :key="index">
            <span v-if="index == word_data.length - 1" class="untyped-content">{{ word[0] }}</span>
            <span v-else class="untyped-content">{{ word[0] + " " }}</span>
        </template>
    </p>
    <p id="wpm">WPM: {{ wpm }}</p>

</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'KeyboardTraining',
    setup() {
        let word_data = require('E:/Documents/IceWaterNotIce_Website/src/assets/others/words.csv');
        word_data.shift();
        // get first 50
        word_data = word_data.slice(0, 50);
        // randomize the word_data
        for (let i = word_data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [word_data[i], word_data[j]] = [word_data[j], word_data[i]];
        }
        let wpm = ref(0);
        onMounted(() => {
            // create a timer
            let start_time = ref(0);
            let corrected_words = 0;

            let training_content = document.getElementById('training-content');
            document.addEventListener('keydown', (e) => {
                if (start_time.value == 0) {
                    start_time.value = new Date();
                }
                if (e.key == 'Backspace') {
                    // remove last typed character
                    let typed_contents = document.getElementsByClassName('typed-content');
                    if (typed_contents.length == 0)
                        return;
                    if (typed_contents[typed_contents.length - 1].classList.contains('correct-typed-content')) {
                        let untyped_contents = document.getElementsByClassName('untyped-content');
                        untyped_contents[0].innerText = typed_contents[typed_contents.length - 1].innerText + untyped_contents[0].innerText;
                        typed_contents[typed_contents.length - 1].remove();
                    }
                    if (typed_contents[typed_contents.length - 1].classList.contains('wrong-typed-content')) {
                        typed_contents[typed_contents.length - 1].remove();
                    }
                    return;
                }
                let untyped_contents = document.getElementsByClassName('untyped-content');
                if (e.key == untyped_contents[0].innerText[0]) {
                    if (untyped_contents[0].innerText.length == 1) {
                        untyped_contents[0].remove();
                        corrected_words++;
                        if (corrected_words >= 1) {
                            let end_time = new Date();
                            let elapsed_time = (end_time - start_time.value) / 1000 / 60;
                            wpm.value = Math.round(corrected_words / elapsed_time);
                        }
                    }
                    else {
                        untyped_contents[0].innerText = untyped_contents[0].innerText.slice(1);
                    }
                    // insert a <span> tag on front of the untyped_contents[0]
                    let span = document.createElement('span');
                    span.innerText = e.key;
                    span.style.color = 'green';
                    span.classList.add('typed-content');
                    span.classList.add('correct-typed-content');
                    training_content.insertBefore(span, untyped_contents[0]);
                }
                else {
                    let span = document.createElement('span');
                    span.innerText = e.key;
                    span.style.color = 'red';
                    span.classList.add('typed-content');
                    span.classList.add('wrong-typed-content');
                    training_content.insertBefore(span, untyped_contents[0]);
                }
            });
        });
        return {
            word_data, wpm
        }
    }
}
</script>
   
<style lang="scss" scoped>
#training-content {
    position: absolute;
    font-size: 1.5em;
    margin: 0;
    padding: 0;
    text-align: left;
    width: 70%;
    left: 15%;
    top: 15%;

}
</style>
