import React from 'react';
// import { } from 'react-icons';

import { Container, Table } from './styles';

export default function About() {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Item</th>
            <th>Detail</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Information</strong>
              <span>Very Detailed</span>
            </td>
          </tr>
        </tbody>
      </Table>

      <footer>
        <button type="button">action</button>
      </footer>
    </Container>
  );
}
