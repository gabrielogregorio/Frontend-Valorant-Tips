import React, { useEffect, useState } from 'react';
import NavbarComponent from '@/layout/navbar';
import api from '@/services/api';
import FooterComponent from '@/layout/footer';
import BreadcrumbComponent from '@/widgets/breadcrumb';
import { navbarEnum } from '@/interfaces/navbar';

const breadcrumbs = [
  { url: '/Dashboard', text: 'administrativo' },
  { url: '/Dashboard', text: 'sugestões' },
];

export default function SuggestionScreen() {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  async function loadSuggestion() {
    const suggestionResponse = api.get(`/suggestions`);

    try {
      const [suggestion] = await Promise.all([suggestionResponse]);
      const suggestionJson = suggestion.data;
      setSuggestions(suggestionJson);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadSuggestion();
  }, []);

  function renderSuggestions() {
    return suggestions.map((report) => (
      <tr key={report._id}>
        <td>{report.post_id}</td>
        <td>{report.email}</td>
        <td>{report.description}</td>
        <td>{report.status ?? 'Não atendido'}</td>
      </tr>
    ));
  }

  return (
    <div className="container">
      <NavbarComponent selected={navbarEnum.SuggestionScreen} />
      <BreadcrumbComponent admin breadcrumbs={breadcrumbs} />

      <div className="subcontainer">
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Email</th>
              <th>Descrição</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>{renderSuggestions()}</tbody>
        </table>
      </div>
      <FooterComponent color="secundary" />
    </div>
  );
}
