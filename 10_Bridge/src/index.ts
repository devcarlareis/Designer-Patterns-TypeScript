import IPlatform from "./platforms/IPLatform";
import TwitchTV from "./platforms/TwitchTv";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./trasnmissions/AdvancedLive";
import Live from "./trasnmissions/Live";


function startLive(platform: IPlatform) {
    console.log('aguarde..');
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlatform){
    console.log('aguarde..');
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.comments();
    live.subtitles();
}

startAdvancedLive(new Youtube);
startAdvancedLive(new TwitchTV);

//startLive(new Youtube());
//startLive(new TwitchTV());