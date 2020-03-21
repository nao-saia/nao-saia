--
-- PostgreSQL database dump
--

-- Dumped from database version 9.3.16
-- Dumped by pg_dump version 9.3.16
-- Started on 2020-03-21 16:52:27

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 178 (class 1259 OID 183156)
-- Name: cidades; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE cidades (
    idcidadeibge integer NOT NULL,
    idestadoibge integer NOT NULL,
    codigoibge integer,
    nomecidade character varying(1000),
    dataatualizacao timestamp without time zone DEFAULT now()
);


--
-- TOC entry 184 (class 1259 OID 183198)
-- Name: estados; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE estados (
    idestadoibge integer NOT NULL,
    sigla character varying(2) NOT NULL,
    nomeestado character varying(50) NOT NULL,
    codigoibge integer NOT NULL,
    nomepais character varying DEFAULT 'BRASIL'::character varying NOT NULL,
    dataatualizacao timestamp without time zone DEFAULT now() NOT NULL
);

--
-- TOC entry 171 (class 1259 OID 183678)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE usuarios (
    idusuario uuid NOT NULL,
    email character varying(250) NOT NULL,
    senha character varying(250) NOT NULL,
    dataatualizacao timestamp with time zone NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 1823 (class 2606 OID 183685)
-- Name: pk_usuarios_idusuario; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY usuarios
    ADD CONSTRAINT pk_usuarios_idusuario PRIMARY KEY (idusuario);


--
-- TOC entry 1928 (class 2606 OID 183304)
-- Name: pk_cidades_idcidadeibge; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY cidades
    ADD CONSTRAINT pk_cidades_idcidadeibge PRIMARY KEY (idcidadeibge);


--
-- TOC entry 1931 (class 2606 OID 183316)
-- Name: pk_estados_idestadoibge; Type: CONSTRAINT; Schema: public; Owner: -; Tablespace: 
--

ALTER TABLE ONLY estados
    ADD CONSTRAINT pk_estados_idestadoibge PRIMARY KEY (idestadoibge);


--
-- TOC entry 1926 (class 1259 OID 183346)
-- Name: fki_cidades_codigoibge; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX fki_cidades_codigoibge ON cidades USING btree (codigoibge);


--
-- TOC entry 1929 (class 1259 OID 183360)
-- Name: fki_estados_idestadoibge; Type: INDEX; Schema: public; Owner: -; Tablespace: 
--

CREATE INDEX fki_estados_idestadoibge ON estados USING btree (idestadoibge);


--
-- TOC entry 1932 (class 2606 OID 183432)
-- Name: fk_cidades_estados_idestadoibge; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cidades
    ADD CONSTRAINT fk_cidades_estados_idestadoibge FOREIGN KEY (idestadoibge) REFERENCES estados(idestadoibge);


-- Completed on 2020-03-21 16:52:27

--
-- PostgreSQL database dump complete
--

