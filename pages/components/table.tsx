/* eslint-disable react/jsx-key */
import { Container, Table } from "@nextui-org/react";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import { ReactElement } from "react";

interface CellProps {
  children: ReactElement;
}

const IconTable = () => {
  const icons: ReactElement<CellProps>[] = [
    <AiOutlineHome size={30} />,
    <AiOutlineMail size={30} />,
    <AiOutlinePhone size={30} />,
    <BiCalendarEvent size={30} />,
    <FaUser size={30} />,
    <MdLocationOn size={30} />,
    <RiLockPasswordFill size={30} />,
  ];

  const rows: { icon: ReactElement<CellProps>; link: string }[][] = [
    [
      { icon: icons[0], link: "/pagina/1-1" },
      { icon: icons[1], link: "/pagina/1-2" },
      { icon: icons[2], link: "/pagina/1-3" },
    ],
    [
      { icon: icons[3], link: "/pagina/2-1" },
      { icon: icons[4], link: "/pagina/2-2" },
      { icon: icons[5], link: "/pagina/2-3" },
    ],
    [
      { icon: icons[6], link: "/pagina/3-1" },
      // Adicione mais ícones e links conforme necessário
    ],
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
        </Table.Header>
        <Table.Body>
          {rows.map((row, rowIndex) => (
            <Table.Row key={rowIndex}>
              <Table.Cell>{rowIndex + 1}</Table.Cell>
              {row.map((cell, cellIndex) => (
                <Table.Cell key={cellIndex}>
                  <Link href={cell.link} passHref>
                    <a>{cell.icon}</a>
                  </Link>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default IconTable;
