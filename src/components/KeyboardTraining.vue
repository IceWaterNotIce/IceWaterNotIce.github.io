<script setup lang="ts">
import { ref, onMounted } from 'vue'
const wordsArray = ref<string[]>([])

const typedContent = ref('')
const untypedContent = ref('')

let charSpaceReplace = ref(' _ ')

// vars for calculating wpm
let start_time = ref(0)
let num_typed_words = ref(0)
let wpm = ref(0)

// vars for calculating accuracy
let num_total_char = ref(0)
let num_wrong_typed = ref(0)
let accuracy = ref(0)

// vars for calculating training time
let secTrainingTimeToday = ref(0)
let strTrainingTimeToday = ref('')
onMounted(() => {
  //get csv data
  fetch('../words.csv')
    .then((response) => response.text())
    .then((data) => {
      //#region prepare data
      const words = data.split('\n')
      // remove the title row
      words.shift()
      // console.log(words)
      //get first column of each row
      wordsArray.value = words.map((word) => word.split(',')[0])
      //trim the space
      wordsArray.value = wordsArray.value.map((word) => word.trim())
      // console.log(wordsArray.value)

      function shuffleArray(array: string[], count: number) {
        for (let i = 0; i < count; i++) {
          let randomIndex = Math.floor(Math.random() * (array.length - i))
          array.push(array[randomIndex])
          array.splice(randomIndex, 1)
        }
        array.splice(0, array.length - count)
        return array
      }
      if (wordsArray.value.length < 50) {
        wordsArray.value = shuffleArray(wordsArray.value, wordsArray.value.length)
      } else {
        wordsArray.value = shuffleArray(wordsArray.value, 50)
      }

      // count total characters
      num_total_char.value = wordsArray.value.join('').length + wordsArray.value.length - 1
      // mix to string
      untypedContent.value = wordsArray.value.join(' ')
      //replace space with charSpaceReplace
      untypedContent.value = untypedContent.value.replace(/ /g, charSpaceReplace.value)
      // console.log(untypedContent.value)
      //#endregion

      //#region keyboard event
      document.addEventListener('keydown', (e) => {
        // start time when first keydown
        if (start_time.value === 0) {
          start_time.value = Date.now()
        }
        // only allow a-z A-Z 0-9 " " and backspace
        if (
          !e.key.match(/^[a-zA-Z0-9 ]$/) &&
          e.key !== 'Backspace' &&
          e.key !== charSpaceReplace.value
        ) {
          return
        }
        if (e.key === 'Backspace') {
          const spanTypedContent = document.querySelector('.typed-content')
          if (spanTypedContent && spanTypedContent.lastChild) {
            if (
              spanTypedContent.lastChild instanceof Element &&
              spanTypedContent.lastChild.className === 'correct-typed'
            ) {
              // add last typed character to untypedContent
              untypedContent.value =
                typedContent.value[typedContent.value.length - 1] + untypedContent.value
              typedContent.value = typedContent.value.slice(0, -1)
            }
            // remove last typed character from typedContent
            spanTypedContent.removeChild(spanTypedContent.lastChild as Node)
          }
          return
        } else if (e.key == ' ' && untypedContent.value.slice(0, charSpaceReplace.value.length) === charSpaceReplace.value) {
            num_typed_words.value++
            //console.log(Date.now() - start_time.value)
            wpm.value =
              Math.floor(
                (num_typed_words.value / ((Date.now() - start_time.value) / 1000 / 60)) * 100
              ) / 100

            let correct_typed = document.createElement('span')
            correct_typed.textContent = untypedContent.value.slice(0, charSpaceReplace.value.length)
            correct_typed.className = 'correct-typed'
            const spanTypedContent = document.querySelector('.typed-content')
            if (spanTypedContent) {
              spanTypedContent.appendChild(correct_typed)
            }

            typedContent.value += untypedContent.value[0]
            untypedContent.value = untypedContent.value.slice(charSpaceReplace.value.length)
            return
          
        } else if (e.key == untypedContent.value[0]) {
          let correct_typed = document.createElement('span')
          correct_typed.textContent = untypedContent.value[0]
          correct_typed.className = 'correct-typed'
          const spanTypedContent = document.querySelector('.typed-content')
          if (spanTypedContent) {
            spanTypedContent.appendChild(correct_typed)
          }

          typedContent.value += untypedContent.value[0]
          untypedContent.value = untypedContent.value.slice(1)
        }
        // handle wrong typed character
        else {
          let wrong_typed = document.createElement('span')
          wrong_typed.textContent = e.key
          wrong_typed.className = 'wrong-typed'
          const spanTypedContent = document.querySelector('.typed-content')
          if (spanTypedContent) {
            spanTypedContent.appendChild(wrong_typed)
          }
          num_wrong_typed.value++
        }

        // console.log('num_total_char', num_total_char.value)
        // console.log('num_wrong_typed', num_wrong_typed.value)
        accuracy.value = Math.floor(
          ((typedContent.value.length - num_wrong_typed.value) / typedContent.value.length) * 100
        )

        //handle event when all words are typed
        secTrainingTimeToday.value = (Date.now() - start_time.value) / 1000
        // format as hh:mm:ss
        strTrainingTimeToday.value = new Date(Number(secTrainingTimeToday.value) * 1000)
          .toISOString()
          .substr(11, 8)
        //console.log('trainingTimeToday', secTrainingTimeToday.value)
      })

      //#endregion
    })
})

import { PageHeader, Divider, Button, Descriptions } from 'ant-design-vue'
</script>

<template>
  <PageHeader :ghost="false" title="Title">
    <template #extra>
      <Button type="primary">Setting</Button>
    </template>
    <Descriptions size="small" :column="3">
      <Descriptions.Item label="WPM">{{ wpm }}wpm</Descriptions.Item>
      <Descriptions.Item label="Accuracy">{{ accuracy }}</Descriptions.Item>
      <Descriptions.Item label="Training time Today">{{ strTrainingTimeToday }}</Descriptions.Item>
    </Descriptions>
    <Divider />
  </PageHeader>
  <p id="training-content">
    <span class="typed-content"></span>
    <span class="untyped-content">{{ untypedContent }}</span>
  </p>
</template>

<style lang="scss">
body {
  overflow: hidden;
}
#training-content {
  position: relative;
  font-size: 2rem;
  text-align: left;
  width: 80vw;
  left: 10vw;
}
.correct-typed {
  color: green;
}
.wrong-typed {
  color: red;
}
</style>
