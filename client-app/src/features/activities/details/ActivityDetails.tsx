import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

export default function ActivityDetails({
  activity,
  cancelSelectActivity,
  openForm
}: {
  activity: Activity,
  cancelSelectActivity: () => void,
  openForm: (id: string) => void
}) {

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>
          {activity.description}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths='2'>
          <Button basic color="blue" content='Edit' onClick={() => openForm(activity.id)} />
          <Button basic color="grey" content='Cancel' onClick={() => cancelSelectActivity()} />
        </Button.Group>
      </CardContent>
    </Card>
  )
}
