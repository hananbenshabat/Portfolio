import {
    Controls,
    FullscreenButton,
    Gesture,
    MediaPlayer,
    MediaProvider,
    PlayButton,
    Poster,
    Time,
    TimeSlider,
    useMediaState,
    type MediaPlayerInstance
} from '@vidstack/react';
import { FullscreenExitIcon, FullscreenIcon, PauseIcon, PlayIcon } from '@vidstack/react/icons';
import '@vidstack/react/player/styles/base.css';
import { useRef } from 'react';

export function VidstackPlayer({ projectName, projectImageLogo, video }) {
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
                        <VidstackTimeSlider />
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

export function VidstackTimeSlider({ thumbnails }: { thumbnails?: string }) {
    return (
        <TimeSlider.Root className="vds-time-slider vds-slider h-8">
            <TimeSlider.Chapters className="vds-slider-chapters">
                {(cues, forwardRef) =>
                    cues.map((cue) => (
                        <div className="vds-slider-chapter" key={cue.startTime} ref={forwardRef}>
                            <TimeSlider.Track className="vds-slider-track" />
                            <TimeSlider.TrackFill className="vds-slider-track-fill vds-slider-track" />
                            <TimeSlider.Progress className="vds-slider-progress vds-slider-track" />
                        </div>
                    ))
                }
            </TimeSlider.Chapters>

            <TimeSlider.Thumb className="vds-slider-thumb" />

            <TimeSlider.Preview className="vds-slider-preview">
                {thumbnails ? (
                    <TimeSlider.Thumbnail.Root src={thumbnails} className="vds-slider-thumbnail vds-thumbnail">
                        <TimeSlider.Thumbnail.Img />
                    </TimeSlider.Thumbnail.Root>
                ) : null}

                <TimeSlider.ChapterTitle className="vds-slider-chapter-title" />

                <TimeSlider.Value className="vds-slider-value" />
            </TimeSlider.Preview>
        </TimeSlider.Root>
    );
}
