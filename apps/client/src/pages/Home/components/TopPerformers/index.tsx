import * as Section from "@/components/Section"
import * as Table from "@/components/Table"
import UserProfile from "@/components/UserProfile"
import RatingSpan from "@/components/RatingSpan"
import Link from "@/components/Link"
import type { FC } from "react"
import ActivitySpan from "@/components/ActivitySpan"

const TopPerformers: FC = () => {
  return (
    <Section.Root>
      <Section.Header>
        <Section.Title>Топ исполнители месяца</Section.Title>
        <Link to="#" title="Посмотреть всех">Посмотреть всех</Link>
      </Section.Header>
      <Section.Content>
        <Table.Root template="1fr 1fr 1fr 0.4fr 1fr">
          <Table.Head>
            <Table.Row>
              <Table.Cell>Профиль</Table.Cell>
              <Table.Cell>Заказы</Table.Cell>
              <Table.Cell>Активность</Table.Cell>
              <Table.Cell>Рейтиг</Table.Cell>
              <Table.Cell>Опыт работы</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <UserProfile />
              </Table.Cell>
              <Table.Cell>20</Table.Cell>
              <Table.Cell><ActivitySpan value={60} /></Table.Cell>
              <Table.Cell><RatingSpan value={4.7} /></Table.Cell>
              <Table.Cell>2 года</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
              <UserProfile />
              </Table.Cell>
              <Table.Cell>20</Table.Cell>
              <Table.Cell><ActivitySpan value={75} /></Table.Cell>
              <Table.Cell><RatingSpan value={4.7} /></Table.Cell>
              <Table.Cell>2 года</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <UserProfile />
              </Table.Cell>
              <Table.Cell>20</Table.Cell>
              <Table.Cell><ActivitySpan value={100} /></Table.Cell>
              <Table.Cell><RatingSpan value={4.7} /></Table.Cell>
              <Table.Cell>2 года</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section.Content>
    </Section.Root>

  )
}
export default TopPerformers
