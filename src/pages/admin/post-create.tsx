import React, { useEffect, useState } from 'react';
import * as uuid from 'uuid';
import Router from 'next/router';
import NavbarComponent from '@/layout/navbar';
import api from '@/services/api';
import { agents, maps, difficult, momment, side } from '@/data/data-valorant';
import Input from '@/base/input';
import ModalComponent from '@/widgets/modal';
import formatImage from '@/services/formatEnvironment';
import FooterComponent from '@/layout/footer';
import Selected from '@/base/selected';
import BreadcrumbComponent from '@/widgets/breadcrumb';
import Title from '@/base/title';
import Button from '@/base/button';
import { navbarEnum } from '@/interfaces/navbar';

type actionType = 'top' | 'bottom';

const breadcrumbs = [
  { url: '/Dashboard', text: 'administrativo' },
  { url: '/PostCreate', text: 'criar' },
];

interface imgInterface {
  description: string;
  image: string;
  _id: string;
}

interface propsModalInterface {
  _id: string;
  description: string;
  image: string;
}

export default function CreatePostScreen() {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [imgAdded, setImgAdded] = useState<imgInterface[]>([]);

  const [formTitle, setFormTitle] = useState<string>('');
  const [formDescription, setFormDescription] = useState<string>('');
  const [formTagMoment, setFormTagMoment] = useState<string>('');
  const [formTagDifficult, setFormTagDifficult] = useState<string>('');
  const [formTagAbility, setFormTagAbility] = useState<string>('');
  const [formTagSide, setFormTagSide] = useState<string>('');
  const [formTagMap, setFormTagMap] = useState<string>('');
  const [formTagMapPosition, setFormTagMapPosition] = useState<string>('');
  const [formTagAgent, setFormTagAgent] = useState<string>('');

  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [propsModal, setPropsModal] = useState<propsModalInterface>({
    _id: '',
    description: '',
    image: '',
  });

  async function handleSubmit() {
    const request = await {
      title: formTitle,
      description: formDescription,
      user: '',
      tags: {
        moment: formTagMoment,
        difficult: formTagDifficult,
        ability: formTagAbility,
        side: formTagSide,
        map: formTagMap,
        mapPosition: formTagMapPosition,
        agent: formTagAgent,
      },
      imgs: imgAdded,
    };

    try {
      await api.post(`/post`, { ...request });
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  }

  function deleteStep(_id: string) {
    setImgAdded(imgAdded.filter((item) => item._id !== _id));
  }

  function putPosition(_id: string, action: actionType) {
    // Obter a posição do item que será trocado
    const positionPut = imgAdded.findIndex((item) => item._id === _id);

    // Copia o item que será trocado
    const copyListDelete = imgAdded[positionPut];

    // Cria uma cópia do imgAdded ( não pode ser alterado )
    const copyImgAdded = JSON.parse(JSON.stringify(imgAdded));

    let increment = 0;

    // Se for para decrementar e for maior que 0
    if (action === 'bottom' && positionPut > 0) {
      increment = -1;
    } else if (action === 'top' && positionPut < imgAdded.length) {
      increment = 1;
    } else {
      return null;
    }

    // Deleta o item que será trocadao
    copyImgAdded.splice(positionPut, 1);

    // Inserir o item na posição anterior
    copyImgAdded.splice(positionPut + increment, 0, copyListDelete);

    // Atualiza no state
    setImgAdded(copyImgAdded);
  }

  function renderSteps() {
    return imgAdded.map((instruction, key) => (
      <div key={instruction._id}>
        <div className="instructionTop">
          <p onClick={() => showModalWithItem(instruction._id)}>
            {key + 1} - {instruction.description}
          </p>
          <Button onClick={() => deleteStep(instruction._id)}>
            <i className="fas fa-times" />
          </Button>
        </div>

        <div className="instructionImage">
          <img src={formatImage(instruction.image)} alt={instruction.description} /> <br />
          <Button className="btn-bottom" onClick={() => putPosition(instruction._id, 'bottom')}>
            <i className="fas fa-chevron-up" />
          </Button>
          <Button className="btn-top" onClick={() => putPosition(instruction._id, 'top')}>
            <i className="fas fa-chevron-down" />
          </Button>
        </div>
        <hr />
      </div>
    ));
  }

  function renderAgent() {
    return agents();
  }

  function renderSide() {
    return side();
  }

  function renderMaps() {
    return maps();
  }

  function renderDifficult() {
    return difficult();
  }

  function renderMomment() {
    return momment();
  }

  function renderHabilits() {
    const filterAbilities: agentInterface = agents().filter((agent) => agent.name === formTagAgent)?.[0];
    return filterAbilities?.habilits ?? [];
  }

  function renderPositionsMap() {
    const filterMapPositions: mapInterface = maps().filter((map) => map.name === formTagMap)?.[0];
    console.log(filterMapPositions?.mapPosition);
    return filterMapPositions?.mapPosition ?? [];
  }

  function showModalWithItem(id: string) {
    const item = imgAdded.filter((item) => item._id === id)[0];
    setPropsModal(item);
    setVisibleModal(true);
  }

  function showModal() {
    setPropsModal({ _id: '', description: '', image: '' });
    setVisibleModal(true);
  }

  function closeModal() {
    setPropsModal({ _id: '', description: '', image: '' });
    setVisibleModal(false);
  }

  function saveModal(_id: string, description: string, image: string) {
    if (_id) {
      const copyImgAdded: imgInterface[] = JSON.parse(JSON.stringify(imgAdded));
      copyImgAdded.forEach((copy) => {
        if (copy._id === _id) {
          copy.description = description;
          copy.image = image;
        }
      });
      setImgAdded(copyImgAdded);
      return setVisibleModal(false);
    }
    setImgAdded([...imgAdded, { description, image, _id: uuid.v4().toString() }]);
    setVisibleModal(false);
  }

  useEffect(() => {
    if (redirect) {
      Router.push('/admin/dashboard');
    }
  }, [redirect]);

  return (
    <div className="container">
      <NavbarComponent selected={navbarEnum.PostCreate} />
      <BreadcrumbComponent admin breadcrumbs={breadcrumbs} />

      <div className="subcontainer">
        {visibleModal ? (
          <ModalComponent
            title="Adicionar Post"
            _id={propsModal._id}
            description={propsModal.description}
            image={propsModal.image}
            closeModal={closeModal}
            saveModal={saveModal}
          />
        ) : null}

        <div className="form">
          <Title>Criar um post</Title>

          <Input type="text" text="Titulo" value={formTitle} setValue={setFormTitle} />
          <Input type="text" text="Descrição" value={formDescription} setValue={setFormDescription} />

          <hr />

          <div className="groupInput">
            <Selected text="Agente" value={formTagAgent} setValue={setFormTagAgent} render={renderAgent} />
            <Selected text="Mapa" value={formTagMap} setValue={setFormTagMap} render={renderMaps} />
            <Selected text="Habilidade" value={formTagAbility} setValue={setFormTagAbility} render={renderHabilits} />
          </div>

          <div className="groupInput">
            <Selected
              text="Posição"
              value={formTagMapPosition}
              setValue={setFormTagMapPosition}
              render={renderPositionsMap}
            />
            <Selected text="Momento" value={formTagMoment} setValue={setFormTagMoment} render={renderMomment} />
            <Selected
              text="Dificuldade"
              value={formTagDifficult}
              setValue={setFormTagDifficult}
              render={renderDifficult}
            />
          </div>

          <div className="groupInput">
            <Selected text="Lado" value={formTagSide} setValue={setFormTagSide} render={renderSide} />
          </div>

          <hr />
          <p className="info">
            Passo a passo da dica. Lembre-se de usar Zoom, usar marcações claras, de forma que seja bem visível.
            <br />
            <br /> Clique nos titulos para EDITAR os itens
          </p>
          <hr />
          <div className="stepsPost">{renderSteps()}</div>

          <div className="groupInput">
            <div className="groupInputSelect">
              <Button className="btn-outline-secundary" onClick={() => showModal()}>
                Novo Passo
              </Button>{' '}
              <br />
            </div>
          </div>
          <div className="groupInput">
            <div className="groupInputSelect">
              <Button onClick={() => handleSubmit()} className="btn-secundary">
                Publicar Dica
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent color="secundary" />
    </div>
  );
}
