--
-- PostgreSQL database dump
--

-- Dumped from database version 11.11
-- Dumped by pg_dump version 11.11

-- Started on 2021-04-23 18:20:38 EDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16471)
-- Name: launch_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.launch_data (
    flight_number integer NOT NULL,
    launch_year character varying(5) NOT NULL,
    launch_date_utc date NOT NULL,
    launch_success boolean,
    "Site_ID" character varying(30) NOT NULL,
    "Site_Name" character varying(30) NOT NULL,
    "Nationality" character varying(30) NOT NULL,
    "Payload_type" character varying(30) NOT NULL,
    "Rocket_Name" character varying(30) NOT NULL
);


ALTER TABLE public.launch_data OWNER TO postgres;

--
-- TOC entry 3123 (class 0 OID 16471)
-- Dependencies: 196
-- Data for Name: launch_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

