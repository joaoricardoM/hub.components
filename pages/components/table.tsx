/* eslint-disable react/jsx-key */
import { Container, Table } from "@nextui-org/react";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const IconTable = () => {
  const icons = [
    <AiOutlineHome size={30} />,
    <AiOutlineMail size={30} />,
    <AiOutlinePhone size={30} />,
    <BiCalendarEvent size={30} />,
    <FaUser size={30} />,
    <MdLocationOn size={30} />,
    <RiLockPasswordFill size={30} />,
  ];

  return (
    <Container md>
      <Table
        aria-label="Icon table"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>ID</Table.Column>
          <Table.Column>Column 1</Table.Column>
          <Table.Column>Column 2</Table.Column>
          <Table.Column>Column 3</Table.Column>
          <Table.Column>Column 4</Table.Column>
          <Table.Column>Column 5</Table.Column>
          <Table.Column>Column 6</Table.Column>
          <Table.Column>Column 7</Table.Column>
          <Table.Column>Column 8</Table.Column>
        </Table.Header>
        <Table.Body>
          {icons.map((icon, index) => (
            <Table.Row key={index}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
              <Table.Cell>{icon}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default IconTable;
