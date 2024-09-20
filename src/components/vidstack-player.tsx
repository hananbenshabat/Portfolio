import {
    Controls,
    FullscreenButton,
    Gesture,
    MediaPlayer,
    MediaPlayerInstance,
    MediaProvider,
    PlayButton,
    Poster,
    Slider,
    Time,
    TimeSlider,
    useMediaState
} from '@vidstack/react';
import { FullscreenExitIcon, FullscreenIcon, PauseIcon, PlayIcon } from '@vidstack/react/icons';
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/theme.css';
import { useRef } from 'react';

export function VidstackPlayer({ id, projectName, projectImageLogo, video }) {
    const ref = useRef<MediaPlayerInstance>(null);

    return (
        <div className="sticky pt-6 px-6 w-full">
            <MediaPlayer
                className="w-full aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4"
                title={projectName}
                src={'youtube/' + video}
                ref={ref}
                streamType="on-demand"
                crossOrigin
                playsInline
                muted>
                <MediaProvider>
                    <Poster
                        className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
                        src={projectImageLogo}
                        alt={projectName}
                    />
                </MediaProvider>
                <Gestures />
                <Controls.Root className="vds-controls">
                    <div className="vds-controls-spacer" />
                    <Controls.Group className="flex w-full items-center px-2">
                        <VidstackTimeSlider id={id} />
                    </Controls.Group>
                    <Controls.Group className="-mt-0.5 flex w-full items-center pb-2 px-2">
                        <Play />
                        <TimeGroup />
                        <div className="vds-controls-spacer" />
                        <Fullscreen />
                    </Controls.Group>
                </Controls.Root>
            </MediaPlayer>
        </div>
    );
}

function Gestures() {
    return (
        <>
            <Gesture className="absolute inset-0 z-0 block h-full w-full" event="pointerup" action="toggle:paused" />
            <Gesture
                className="absolute inset-0 z-0 block h-full w-full"
                event="dblpointerup"
                action="toggle:fullscreen"
            />
            <Gesture className="absolute left-0 top-0 z-10 block h-full w-1/5" event="dblpointerup" action="seek:-10" />
            <Gesture className="absolute right-0 top-0 z-10 block h-full w-1/5" event="dblpointerup" action="seek:10" />
        </>
    );
}

export function Play() {
    const isPaused = useMediaState('paused');
    return <PlayButton className="vds-button">{isPaused ? <PlayIcon /> : <PauseIcon />}</PlayButton>;
}

export function Fullscreen() {
    const isActive = useMediaState('fullscreen');
    return (
        <FullscreenButton className="vds-button">
            {isActive ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </FullscreenButton>
    );
}

export function TimeGroup() {
    return (
        <div className="ms-2.5 flex items-center text-sm font-medium">
            <Time className="time" type="current" />
            <div className="mx-1 text-white/80">/</div>
            <Time className="time" type="duration" />
        </div>
    );
}

export function VidstackTimeSlider({ id }) {
    return (
        <TimeSlider.Root className="group relative mx-[7.5px] inline-flex h-8 w-full cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
            <TimeSlider.Track className="relative ring-sky-400 z-0 h-[5px] w-full rounded-md bg-white/30 group-data-[focus]:ring-[3px]">
                <TimeSlider.TrackFill
                    className={`absolute h-full w-[var(--slider-fill)] rounded-md will-change-[width] ${id % 2 === 0 ? `bg-secondary text-secondary-content` : `bg-primary-focus text-primary-content`}`}
                />
            </TimeSlider.Track>

            <TimeSlider.Preview
                className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100 pointer-events-none"
                noClamp>
                <TimeSlider.Value className="rounded-md bg-black px-2 py-px text-[13px] font-medium text-white" />
            </TimeSlider.Preview>
            <Slider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
        </TimeSlider.Root>
    );
}
