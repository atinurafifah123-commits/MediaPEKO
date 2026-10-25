function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fCZo7g1nSo":
        Script1();
        break;
  }
}

function Script1()
{
  var audio=document.getElementById('bgSong');
audio.scr="musik.mp3";
audio.load();
audio.play();

}

