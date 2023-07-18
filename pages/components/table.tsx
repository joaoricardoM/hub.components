import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { FaAllergies, FaToilet } from "react-icons/fa";
import { FaPersonPregnant } from "react-icons/fa6";
import { GiThink } from "react-icons/gi";

import { IconContext } from "react-icons";
import { Card, Grid, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const icons = [
  // Substitua IconName pelos nomes dos ícones que você deseja usar
  { icon: FiHome, text: "Início", route: "/OutraPagina" },
  { icon: FiUser, text: "Perfil", route: "/OutraPagina1" },
  { icon: FiSettings, text: "Configurações", route: "/OutraPagina2" },
  { icon: FaAllergies, text: "Alergia", route: "/OutraPagina" },
  { icon: FaToilet, text: "Diarreia/ Vômitos", route: "/OutraPagina" },
  { icon: FaPersonPregnant, text: "Gravidez", route: "/OutraPagina" },
  // { icon: GiThink, text: "Gravidez", route: "/OutraPagina" },
  // ...
];

export default function Home() {
  const router = useRouter();

  const handleIconClick = (route: string) => {
    console.log("oi");
    console.log(route);
    // Aqui você pode definir a rota para onde o clique do ícone redirecionará
    // Substitua '/OutraPagina' pela rota desejada
    router.push(route);
  };

  return (
    <div>
      <h1>Tabela de Ícones</h1>
      <Grid.Container gap={2} justify="center">
        {icons.map(({ icon: Icon, text, route }, index) => (
          <Grid key={index} xs={6}>
            <Card
              variant="bordered"
              isHoverable
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              <Card.Body onClick={(e) => handleIconClick(route)}>
                <IconContext.Provider value={{ size: "3em" }}>
                  <div>
                    <Icon />
                  </div>
                </IconContext.Provider>
                <Text h4>{text}</Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
