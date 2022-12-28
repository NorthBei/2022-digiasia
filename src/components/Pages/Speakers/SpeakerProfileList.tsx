import SpeakerProfile, { SpeakerProfileProps } from './SpeakerProfile';

type SpeakerProfileListProps = {
  speakers: SpeakerProfileProps[];
};

function SpeakerProfileList(props: SpeakerProfileListProps) {
  const { speakers } = props;

  return (
    <>
      {speakers.map((speaker) => {
        return <SpeakerProfile key={speaker.name} {...speaker} />;
      })}
    </>
  );
}

export default SpeakerProfileList;
