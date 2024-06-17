<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  itemImage: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['imageCombined'])

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

// const onUpload = () => {
//   const fd = new FormData()
//   fd.append('file', selectedFile.value, selectedFile.value.name)
//   fd.append('file2', itemImageFile.value, itemImageFile.value.name)
//   axios
//     .post('http://localhost:8080/api/upload/overlayImage', fd, {
//       responseType: 'blob', // Ensure the response is of type blob
//       maxContentLength: 100000000,
//       maxBodyLength: 100000000
//     })
//     .then((res) => {
//       const blob = new Blob([res.data], { type: 'image/png' })
//       const blobUrl = URL.createObjectURL(blob)
//       emit('imageCombined', blobUrl)
//     })
//     .catch((error) => {
//       console.error('Failed to upload images:', error)
//     })
// }

const onUpload = () => {
  const fd = new FormData()
  fd.append('file', selectedFile.value, selectedFile.value.name)
  fd.append('file2', itemImageFile.value, itemImageFile.value.name)
  axios
    .post('http://localhost:8080/api/upload/overlayImage', fd, {
      maxContentLength: 100000000,
      maxBodyLength: 100000000,
      responseType: 'arraybuffer' // Esto es crucial para obtener los datos binarios correctamente
    })
    .then((res) => {
      console.log(res)
      // Llamamos a una función para manejar la respuesta y mostrar la imagen
      handleImageResponse(res)
    })
    .catch((error) => {
      console.error('Failed to upload images:', error)
    })
}

const handleImageResponse = (response) => {
  const blob = new Blob([response.data], { type: 'image/png' })
  const blobUrl = URL.createObjectURL(blob)
  emit('imageCombined', blobUrl)
}
</script>
<template>
  <div class="container">
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload()">Upload</button>
  </div>
</template>
<style scoped></style>
