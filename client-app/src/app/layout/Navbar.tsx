import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavBar({ openForm }: { openForm: () => void }) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button positive content='Create activity' onClick={openForm} />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

