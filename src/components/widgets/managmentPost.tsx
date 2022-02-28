import { useEffect, useState } from 'react';
import * as uuid from 'uuid';
import Router, { useRouter } from 'next/router';
import { Navbar } from '@/layout/navbar';
import { api } from '@/services/api';
import { agents, maps, difficult, moment, side } from '@/data/data-valorant';
import { Input } from '@/base/input';
import { Modal } from '@/widgets/modal';
import { formatImage } from '@/services/formatEnvironment';
import { Footer } from '@/layout/footer';
import { Selected } from '@/base/selected';
import { Breadcrumb } from '@/widgets/breadcrumb';
import { Title } from '@/base/title';
import { Button } from '@/base/button';
import {
  AgentInterface,
  DifficultInterface,
  MapInterface,
  MomentInterface,
  SideInterface,
} from '@/interfaces/posts';
import { FaTimes } from 'react-icons/fa';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { navbarEnum } from '@/interfaces/navbar';
import { Loader } from '@/base/loader';
import { GroupInput } from '@/base/groupInput';
import { modelNavbarAdmin } from '@/schemas/navbar';
import { SubContainer } from '@/base/subContainer';
import { Form } from '@/base/Form';
import { GroupInputMultiple } from '@/base/groupInputMultiple';
import { Hr } from '@/base/hr';
import { ButtonForm } from '@/base/buttonForm';
import Image from 'next/image';
import { convertToSelectedRender } from '@/helpers/convertToSelectedData';

type actionType = 'top' | 'bottom';

interface imgInterface {
  description: string;
  image: string;
  id: string;
}

interface propsModalInterface {
  id: string;
  description: string;
  image: string;
}

type modeManagment = {
  breadcrumbs: { url: navbarEnum; text: string }[];
  mode: 'create' | 'edit';
};

export const CreatePostManagement = ({ breadcrumbs, mode }: modeManagment) => {
  const { query, isReady } = useRouter();
  const id = `${query?.id || ''}`;

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
  const [loading, setLoading] = useState<boolean>(false);
  const [propsModal, setPropsModal] = useState<propsModalInterface>({
    id: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (mode === 'edit' && isReady) {
      setLoading(true);
      api
        .get(`/post/${id}`)
        .then((res) => {
          const postJson = res.data;
          setFormTitle(postJson.title);
          setFormDescription(postJson.description);
          setFormTagMoment(postJson.tags.moment);
          setFormTagDifficult(postJson.tags.difficult);
          setFormTagAbility(postJson.tags.ability);
          setFormTagSide(postJson.tags.side);
          setFormTagMap(postJson.tags.map);
          setFormTagMapPosition(postJson.tags.mapPosition);
          setFormTagAgent(postJson.tags.agent);
          setImgAdded(postJson.imgs);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, mode, isReady]);

  async function handleSubmitManagement() {
    setLoading(true);
    const request = {
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

    if (mode === 'create') {
      api
        .post(`/post`, { ...request })
        .then(() => {
          setRedirect(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (mode === 'edit') {
      api
        .put(`/post/${id}`, { ...request })
        .then(() => {
          setRedirect(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function deleteStep(idPost: string) {
    setImgAdded(imgAdded.filter((item) => item.id !== idPost));
  }

  function putPosition(idPost: string, action: actionType) {
    const positionPut = imgAdded.findIndex((item) => item.id === idPost);
    const copyListDelete = imgAdded[positionPut];
    const copyImgAdded = JSON.parse(JSON.stringify(imgAdded));

    let increment = 0;

    if (action === 'bottom' && positionPut > 0) {
      increment = -1;
    } else if (action === 'top' && positionPut < imgAdded.length) {
      increment = 1;
    }

    copyImgAdded.splice(positionPut, 1);
    copyImgAdded.splice(positionPut + increment, 0, copyListDelete);
    setImgAdded(copyImgAdded);
  }

  function renderAgent(): AgentInterface[] {
    return agents();
  }

  function renderSide(): SideInterface[] {
    return side();
  }

  function renderMaps(): MapInterface[] {
    return maps();
  }

  function renderDifficult(): DifficultInterface[] {
    return difficult();
  }

  function renderMoment(): MomentInterface[] {
    return moment();
  }

  function renderAbilities() {
    const filterAbilities: AgentInterface = agents().filter(
      (agent) => agent.name === formTagAgent,
    )?.[0];
    return filterAbilities?.abilities ?? [];
  }

  function renderPositionsMap() {
    const filterMapPositions: MapInterface = maps().filter((map) => map.name === formTagMap)?.[0];
    return filterMapPositions?.mapPosition ?? [];
  }

  function showModalWithItem(idPost: string) {
    const item = imgAdded.filter((itemLocal) => itemLocal.id === idPost)[0];
    setPropsModal(item);
    setVisibleModal(true);
  }

  function showModal() {
    setPropsModal({ id: '', description: '', image: '' });
    setVisibleModal(true);
  }

  function closeModal() {
    setPropsModal({ id: '', description: '', image: '' });
    setVisibleModal(false);
  }

  function renderSteps() {
    return imgAdded.map((instruction, key) => (
      <div key={`${instruction.id} ${instruction.image}`} className="w-full">
        <div className="flex">
          <p
            className="text-skin-white flex-1 text-base"
            onClick={() => showModalWithItem(instruction.id)}
            role="presentation">
            {key + 1} - {instruction.description}
          </p>
          <Button
            className="text-skin-white text-base ml-2"
            onClick={() => deleteStep(instruction.id)}
            dataTestid={`deleteStepButton-${key + 1}`}>
            <FaTimes />
          </Button>
        </div>

        <div className="relative flex-1 ">
          <div className="relative h-72 w-full ">
            <Image
              layout="fill"
              className="object-cover"
              data-src={formatImage(instruction.image)}
              src={formatImage(instruction.image)}
              alt={instruction.description}
            />
          </div>

          <br />
          <Button
            className="top-0 left-2/4 absolute z-btnPost"
            onClick={() => putPosition(instruction.id, 'bottom')}
            dataTestid={`btn-top-${key + 1}`}>
            <BsChevronUp className="text-3xl font-extrabold text-skin-white " />
          </Button>
          <Button
            className="bottom-5 left-2/4 absolute z-btnPost"
            onClick={() => putPosition(instruction.id, 'top')}
            dataTestid={`btn-bottom-${key + 1}`}>
            <BsChevronDown className="text-3xl font-extrabold text-skin-white" />
          </Button>
        </div>
        <Hr />
      </div>
    ));
  }

  const saveModal = (idPost: string, description: string, image: string) => {
    if (idPost) {
      const copyImgAdded: imgInterface[] = JSON.parse(JSON.stringify(imgAdded));
      for (let x = 0; x < copyImgAdded.length; x += 1) {
        if (copyImgAdded[x].id === idPost) {
          copyImgAdded[x].description = description;
          copyImgAdded[x].image = image;
        }
      }
      setImgAdded(copyImgAdded);
      setVisibleModal(false);
    } else {
      setImgAdded([...imgAdded, { description, image, id: uuid.v4().toString() }]);
      setVisibleModal(false);
    }
  };

  async function deletePost(idPost: string) {
    setLoading(true);
    api.delete(`/post/${idPost}`).finally(() => {
      setLoading(false);
      setRedirect(true);
    });
  }

  useEffect(() => {
    if (redirect) {
      Router.push('/admin/view-posts');
    }
  }, [redirect]);

  return (
    <>
      {mode === 'create' ? (
        <Navbar selected={navbarEnum.PostCreate} modelNavbar={modelNavbarAdmin} />
      ) : (
        <Navbar selected={navbarEnum.EditScreen} modelNavbar={modelNavbarAdmin} />
      )}
      <Breadcrumb admin breadcrumbs={breadcrumbs} />
      <Loader active={loading} />

      <SubContainer>
        {visibleModal ? (
          <Modal
            title="Adicionar Post"
            id={propsModal.id}
            description={propsModal.description}
            image={propsModal.image}
            closeModal={() => closeModal()}
            saveModal={saveModal}
          />
        ) : null}

        <Form>
          <Title>{mode === 'create' ? 'Criar um post' : 'Editar um post'}</Title>

          {mode === 'edit' ? (
            <Button className="text-skin-secondary-regular" onClick={() => deletePost(id)}>
              Excluir
            </Button>
          ) : null}

          <Input name="title" type="text" text="Titulo" value={formTitle} setValue={setFormTitle} />
          <Input
            name="description"
            type="text"
            text="Descrição"
            value={formDescription}
            setValue={setFormDescription}
          />

          <Hr />

          <GroupInputMultiple>
            <Selected
              name="Agente"
              text="Agente"
              value={formTagAgent}
              setValue={setFormTagAgent}
              render={convertToSelectedRender(renderAgent())}
            />
            <Selected
              name="Mapa"
              text="Mapa"
              value={formTagMap}
              setValue={setFormTagMap}
              render={convertToSelectedRender(renderMaps())}
            />
            <Selected
              name="Habilidade"
              text="Habilidade"
              value={formTagAbility}
              setValue={setFormTagAbility}
              render={renderAbilities()}
            />
          </GroupInputMultiple>

          <GroupInputMultiple>
            <Selected
              name="Posição"
              text="Posição"
              value={formTagMapPosition}
              setValue={setFormTagMapPosition}
              render={renderPositionsMap()}
            />
            <Selected
              name="Momento"
              text="Momento"
              value={formTagMoment}
              setValue={setFormTagMoment}
              render={renderMoment()}
            />
            <Selected
              name="Dificuldade"
              text="Dificuldade"
              value={formTagDifficult}
              setValue={setFormTagDifficult}
              render={renderDifficult()}
            />
          </GroupInputMultiple>

          <GroupInputMultiple>
            <Selected
              name="Lado"
              text="Lado"
              value={formTagSide}
              setValue={setFormTagSide}
              render={renderSide()}
            />
          </GroupInputMultiple>

          <Hr />

          <p className="dark:text-skin-white text-skin-gray-500">
            Passo a passo da dica. Lembre-se de usar Zoom, usar marcações claras, de forma que seja
            bem visível.
            <br />
            <br /> Clique nos titulos para EDITAR os itens
          </p>

          <Hr />

          {renderSteps()}

          <div className="mt-5 w-full">
            <GroupInput>
              <ButtonForm
                className="border-skin-primary-light text-skin-primary-light p-1"
                onClick={() => showModal()}>
                Novo Passo
              </ButtonForm>
            </GroupInput>

            <GroupInput>
              <ButtonForm
                onClick={() => handleSubmitManagement()}
                className="border-skin-primary-light text-skin-white bg-skin-primary-light p-1">
                Publicar Dica
              </ButtonForm>
            </GroupInput>
          </div>
        </Form>
      </SubContainer>
      <Footer />
    </>
  );
};
