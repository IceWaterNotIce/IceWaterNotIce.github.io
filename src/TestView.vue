<script setup lang="ts">
// get file from google drive share link
import axios from 'axios';

function getFileFromPublicLink(fileUrl : string) {
  axios.get(fileUrl, { responseType: 'blob' })
    .then(
      (response: any) => { // Specify the type for 'response'
      // 文件数据可在 response.data 中获取
      console.log(response.data);
      // 例如,您可以将文件保存到本地
      // saveFileLocally(response.data, 'filename.ext');
    })
    .catch((error: any) => { // Specify the type for 'error'
      console.error('Error:', error);
    });
}

// 使用公开的Google Drive共享链接调用函数
getFileFromPublicLink('https://drive.google.com/uc?export=download&id=1u88yJ4uoVErE3DSAqvgbneX0zcRq7RvJ');


</script>

<template>
  <div>
  </div>
</template>

<style scoped lang="scss">
</style>