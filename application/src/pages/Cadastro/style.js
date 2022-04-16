import styled from 'styled-components';



export const ConteinerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 78px;

    margin-top: 136px;

    .wrapper-progress {
        width: 500px;
        position: relative;
        
        & .progress {
            width: 100%;
            height: 6px;
            position: absolute;
            top: 10px;
            z-index: 0;
        }

        & .mark {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: none;
            position: absolute;

            & span {
                height: 19px;
                width: 19px;
                background: rgba(196, 196, 196, 1);
                border-radius: 50%;
                margin: 0 -5px;
                z-index: 1;
            }
        }
        


    }


    form {
        display: flex;
        flex-direction: column;
        gap: 27px;
    }


    .cep {
        & input {
            height: 47px;
            width: 286px;
            border-radius: 6px;

            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            background: rgba(196, 196, 196, 1);

            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;

            padding: 12px 17px;
        }
    }

    .nome {
        & input {
            height: 47px;
            width: 613px;
            border-radius: 6px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            background: rgba(196, 196, 196, 1);

            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;

            padding: 12px 17px;
        }
    }

    .endereço {
        display: flex;
        gap: 10px;
        & #endereço {
            height: 47px;
            width: 513px;
            border-radius: 6px;
            background: rgba(196, 196, 196, 1);

            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;

            padding: 12px 17px;
        }

        & #numero {
            height: 47px;
            width: 91px;
            left: 615px;
            top: 289px;
            border-radius: 6px;
            background: rgba(196, 196, 196, 1);

            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;


            padding: 12px 17px;
        }
    }

    .complemento {
        & input {
            height: 47px;
            width: 100%;
            border-radius: 6px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            background: rgba(196, 196, 196, 1);

            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;

            padding: 12px 17px;
        }
    }

    .descrição {
        & textarea {
            width: 100%;
            height: 109px;
            border-radius: 6px;
            background: rgba(196, 196, 196, 1);

            font-family: Roboto;
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;

            padding: 12px 17px;
        }
    }
`;