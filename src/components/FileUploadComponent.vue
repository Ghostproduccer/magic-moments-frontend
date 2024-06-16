<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  itemImage: {
    type: String,
    required: true
  }
})

const getItemImageFile = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    const file = new File([blob], 'itemImage.jpg', { type: 'image/jpeg' })
    return file
  } catch (error) {
    console.error('Error fetching image:', error)
    throw error
  }
}

const itemImageFile = ref(null)
const selectedFile = ref(null)

const onFileSelected = async (event) => {
  selectedFile.value = event.target.files[0]
  try {
    itemImageFile.value = await getItemImageFile(props.itemImage)
  } catch (error) {
    console.error('Failed to fetch item image:', error)
  }
}

const onUpload = () => {
  const fd = new FormData()
  fd.append('userImage', selectedFile.value, selectedFile.value.name)
  fd.append('itemImage', itemImageFile.value, itemImageFile.value.name)
  axios.post('http://localhost:8080/api/upload/overlayImage', fd).then((res) => {
    console.log(res)
  })
}
</script>
<template>
  <div class="container">
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload()">Upload</button>
  </div>
</template>
<style scoped></style>
