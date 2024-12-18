import { Dimmer, Loader } from "semantic-ui-react";

export default function LoadingComponent({
  inverted = true,
  content = 'Loading...'
}: {
  inverted?: boolean,
  content: string
}) {

  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  )
}
