// Using Fecth
var entertainURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL0FeOu0VtegcevmxMM6hnmmlTFycHZ3Zb&key=AIzaSyBWl800UrBjg3uVTtb9qPHTVuJywVDeaj0'
const eduURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL0FeOu0VtegcevmxMM6hnmmlTFycHZ3Zb&key=AIzaSyBWl800UrBjg3uVTtb9qPHTVuJywVDeaj0'

fetch(oauth2URL,{method:"GET"}).then(res => res.json())
.then(response => {
    bearerToken = response['access_token']
    console.log('Success:', JSON.stringify(response));
})
.catch(error => console.error('Error:', error));