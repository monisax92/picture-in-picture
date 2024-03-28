const videoEl = document.getElementById("video");
const btn = document.getElementById("btn");

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    }
  } catch (err) {
    console.log(err);
  }
}
btn.addEventListener("click", async () => {
  btn.disabled = true;
  // Chrome, Edge, Opera, Safari, Chrome Android, Opera Android, Safari on iOS, Samsung Internet
  //not for: Firefox, Firefox for Android, WebView Android
  await videoEl.requestPictureInPicture();
  btn.disabled = false;
});

selectMediaStream();
