import { Table } from "@nextui-org/react";

const MyTable = () => {
  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Row>
          <Table.Column>Coluna 1</Table.Column>
          <Table.Column>Coluna 2</Table.Column>
          <Table.Column>Coluna 3</Table.Column>
          <Table.Column>Coluna 4</Table.Column>
          <Table.Column>Coluna 5</Table.Column>
          <Table.Column>Coluna 6</Table.Column>
          <Table.Column>Coluna 7</Table.Column>
          <Table.Column>Coluna 8</Table.Column>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Array.from(Array(7).keys()).map((rowIndex) => (
          <Table.Row key={rowIndex}>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 1</Table.Cell>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 2</Table.Cell>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 3</Table.Cell>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 4</Table.Cell>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 5</Table.Cell>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 6</Table.Cell>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 7</Table.Cell>
            <Table.Cell>Linha {rowIndex + 1}, Coluna 8</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default MyTable;
