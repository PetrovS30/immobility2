import { forwardRef } from "react";

const AudioPlayer = forwardRef<HTMLAudioElement>((_, ref) => {
    return (
        <audio ref={ref}>
            <source src='https://zaycev.europium.zerocdn.com/bc43a68fa9baa2a25fa99e1933b20e4b:2025012512/track/24881994.mp3' type="audio/mp3" />
             Ваш браузер не поддерживает элемент audio.
        </audio>
    )
});

export default AudioPlayer;