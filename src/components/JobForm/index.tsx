import { FormEvent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const FormContainer = styled.section`
background: #fff;
padding: 20px;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0,0,0,0.08);
margin-bottom: 24px;
`;

const FormTitle = styled.h2`
margin: 0 0 16px;
`;

const FormField = styled.div`
margin-bottom: 12px;
`;

const Label = styled.label`
display: block;
margin-bottom: 4px;
font-weight: 600;
`;

const Input = styled.input`
width: 100%;
padding: 10px;
border: 1px solid #cbd5e1;
border-radius: 8px;
outline: none;
`;

const TextArea = styled.textarea`
width: 100%;
padding: 10px;
border: 1px solid #cbd5e1;
border-radius: 8px;
`;

const SubmitButton = styled.button`
padding: 10px 18px;
border: none;
border-radius: 8px;
background-color: #0077b6;
color: #fff;
font-weight: 700;
cursor: pointer;
`;

const JobForm = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert(`Vaga criada: ${title} - ${company} (${location})`);
        setTitle('');
        setCompany('');
        setLocation('');
        setDescription('');
    }

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const handleCompanyChange = (event: ChangeEvent<HTMLInputElement>) => setCompany(event.target.value);
    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => setLocation(event.target.value);
    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value);

    return (
        <FormContainer>
            <FormTitle>Cadastre uma nova vaga</FormTitle>
            <form onSubmit={handleSubmit}>
                <FormField>
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" value={title} onChange={handleTitleChange} required />
                </FormField>
                <FormField>
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" value={company} onChange={handleCompanyChange} required />
                </FormField>
                <FormField>
                    <Label htmlFor="location">Localização</Label>
                    <Input id="location" value={location} onChange={handleLocationChange} required />
                </FormField>
                <FormField>
                    <Label htmlFor="description">Descrição</Label>
                    <TextArea id="description" value={description} onChange={handleDescriptionChange} rows={3} required />
                </FormField>
                <SubmitButton type="submit">Adicionar Vaga</SubmitButton>
            </form>
        </FormContainer>
    );
};

export default JobForm;
