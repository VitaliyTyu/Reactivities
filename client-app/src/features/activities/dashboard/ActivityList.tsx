import { Button, Item, ItemGroup, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { SyntheticEvent, useState } from "react";

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: {
  activities: Activity[],
  selectActivity: (id: string) => void,
  deleteActivity: (id: string) => void
  submitting: boolean,
}) {
  const [target, setTarget] = useState('');

  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <ItemGroup divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </Item.Description>
              <Item.Extra>
                <Button floated='right' content='View' color='blue' onClick={() => selectActivity(activity.id)} />
                <Button
                  name={activity.id}
                  floated='right'
                  content='Delete'
                  color='red'
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  loading={submitting && target === activity.id}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </ItemGroup>
    </Segment>

  )
}
