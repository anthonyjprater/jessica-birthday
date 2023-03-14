export default {
  async getImageArray() {
    let response = await fetch(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f2a2e26a4b62130923eb8fc5fc39c6ab&user_id=197860396%40N07&format=json&nojsoncallback=1'
    )
    let data = await response.json()
    let slides = data
    return slides.photos.photo.map(
      (image) => `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
    )
  }
}
