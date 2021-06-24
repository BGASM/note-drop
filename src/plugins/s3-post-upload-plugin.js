import store from '../store/store'

async function uploadToS3 (file, progress, error, options) {
    const matches = file.name.match(/\.([a-zA-Z0-9]+)$/)
    const extension = (matches) ? matches[1] : 'txt'
    const name = store.state.uuid
    progress(5)
    const response = await fetch(options.uploadUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        extension,
        mime: file.type || 'application/octet-stream',
        name
      })
    })
    if (response.ok) {
      const { data: presignedPostData } = await response.json()
      progress(10)
      try {
        await uploadFileToS3(presignedPostData, file);
        console.log("File was successfully uploaded!");
        progress(100)
      } catch (e) {
        console.log("An error occurred!", e.message);
      }
    }}

/**
 * Upload file to S3 with previously received pre-signed POST data.
 * @param presignedPostData
 * @param file
 * @returns {Promise<any>}
 */
const uploadFileToS3 = (presignedPostData, file) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    Object.keys(presignedPostData.fields).forEach(key => {
      formData.append(key, presignedPostData.fields[key]);
    });
    // Actual file has to be appended last.
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", presignedPostData.url, true);
    xhr.send(formData);
    xhr.onload = function() {
      this.status === 204 ? resolve() : reject(this.responseText);
    };
  });
};

export default function (instance) {
  instance.extend({
    uploader: uploadToS3
  })
}