import React, {FC} from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Fonts } from "../styles/variables";
import { ICharacter } from "../types/types";

interface CharacterItemProps {
    character: ICharacter;
};

interface Props {
  src: string;
};

const Animation = css`
  position: relative;
  >.front,
  >.back {
      display: block;
      transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
      transition-duration: 0.5s;
      transition-property: transform, opacity;
  }
  >.front {
      transform: rotateY(0deg);
  }
  >.back {
      position: absolute;
      opacity: 0;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      transform: rotateY(-180deg);
  }
  >.front,
  >.back {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
    background-size: cover;
    background-position: center;
    background-color: #313131;
    border-radius: 3px;
    text-align: center;
    p {
      font-family: ${Fonts.cooper}
      font-size: 25px;
    }
  }
  &:hover {
      >.front {
          transform: rotateY(180deg);
      }
      >.back {
          opacity: 1;
          transform: rotateY(0deg);
      }
  }
`

const StyledItem = styled.li`
  ${Animation};

  width: 214px;
  height: 315px;

  cursor: pointer;
`

const ImageWrap = styled.div<Props>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: ${({src}) => `url(${src})`}
`

const CharacterItem: FC<CharacterItemProps> = ({character}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${character.char_id}`);
  };

  return (
    <StyledItem onClick={clickHandler}>
      <ImageWrap className="front" src={character.img} />
      <div className="back">
        <p>{character.name}</p>
      </div>

    </StyledItem>

  );
}

export default CharacterItem;
