--
-- PostgreSQL database dump
--

-- Dumped from database version 11.11
-- Dumped by pg_dump version 11.11

-- Started on 2021-04-23 16:55:36 EDT

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
    launch_date_utc character varying(30) NOT NULL,
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

COPY public.launch_data (flight_number, launch_year, launch_date_utc, launch_success, "Site_ID", "Site_Name", "Nationality", "Payload_type", "Rocket_Name") FROM stdin;
1	2006	2006-03-24T22:30:00.000Z	f	kwajalein_atoll	Kwajalein Atoll	United States	Satellite	Falcon 1
2	2007	2007-03-21T01:10:00.000Z	f	kwajalein_atoll	Kwajalein Atoll	United States	Satellite	Falcon 1
3	2008	2008-08-03T03:34:00.000Z	f	kwajalein_atoll	Kwajalein Atoll	United States	Satellite	Falcon 1
4	2008	2008-09-28T23:15:00.000Z	t	kwajalein_atoll	Kwajalein Atoll	United States	Satellite	Falcon 1
5	2009	2009-07-13T03:35:00.000Z	t	kwajalein_atoll	Kwajalein Atoll	Malaysia	Satellite	Falcon 1
6	2010	2010-06-04T18:45:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon Boilerplate	Falcon 9
7	2010	2010-12-08T15:43:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.0	Falcon 9
8	2012	2012-05-22T07:44:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.0	Falcon 9
9	2012	2012-10-08T00:35:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.0	Falcon 9
10	2013	2013-03-01T19:10:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.0	Falcon 9
11	2013	2013-09-29T16:00:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	Canada	Satellite	Falcon 9
12	2013	2013-12-03T22:41:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Luxembourg	Satellite	Falcon 9
13	2014	2014-01-06T18:06:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Thailand	Satellite	Falcon 9
14	2014	2014-04-18T19:25:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
15	2014	2014-07-14T15:15:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
16	2014	2014-08-05T08:00:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Hong Kong	Satellite	Falcon 9
17	2014	2014-09-07T05:00:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Hong Kong	Satellite	Falcon 9
18	2014	2014-09-21T05:52:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
19	2015	2015-01-10T09:47:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
20	2015	2015-02-11T23:03:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
21	2015	2015-03-02T03:50:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Hong Kong	Satellite	Falcon 9
22	2015	2015-04-14T20:10:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
23	2015	2015-04-27T23:03:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Turkmenistan	Satellite	Falcon 9
24	2015	2015-06-28T14:21:00.000Z	f	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
25	2015	2015-12-22T01:29:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
26	2016	2016-01-17T15:42:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
27	2016	2016-03-04T23:35:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Luxembourg	Satellite	Falcon 9
28	2016	2016-04-08T20:43:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
29	2016	2016-05-06T05:21:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Japan	Satellite	Falcon 9
30	2016	2016-05-27T21:39:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Thailand	Satellite	Falcon 9
31	2016	2016-06-15T14:29:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Hong Kong	Satellite	Falcon 9
32	2016	2016-07-18T04:45:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
33	2016	2016-08-14T05:26:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Japan	Satellite	Falcon 9
34	2016	2016-09-01T13:07:00.000Z	f	ccafs_slc_40	CCAFS SLC 40	Israel	Satellite	Falcon 9
35	2017	2017-01-14T17:54:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
36	2017	2017-02-19T14:39:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Dragon 1.1	Falcon 9
37	2017	2017-03-16T06:00:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
38	2017	2017-03-30T22:27:00.000Z	t	ksc_lc_39a	KSC LC 39A	Luxembourg	Satellite	Falcon 9
39	2017	2017-05-01T11:15:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
40	2017	2017-05-15T23:21:00.000Z	t	ksc_lc_39a	KSC LC 39A	United Kingdom	Satellite	Falcon 9
41	2017	2017-06-03T21:07:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Dragon 1.1	Falcon 9
42	2017	2017-06-23T19:10:00.000Z	t	ksc_lc_39a	KSC LC 39A	Bulgaria	Satellite	Falcon 9
43	2017	2017-06-25T20:25:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
44	2017	2017-07-05T23:35:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
45	2017	2017-08-14T16:31:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Dragon 1.1	Falcon 9
46	2017	2017-08-24T18:50:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	Taiwan	Satellite	Falcon 9
47	2017	2017-09-07T13:50:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
48	2017	2017-10-09T12:37:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
49	2017	2017-10-11T22:53:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
50	2017	2017-10-30T19:34:00.000Z	t	ksc_lc_39a	KSC LC 39A	South Korea	Satellite	Falcon 9
51	2017	2017-12-15T15:36:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
52	2017	2017-12-23T01:27:23.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
53	2018	2018-01-08T01:00:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
54	2018	2018-01-31T21:25:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Luxembourg	Satellite	Falcon 9
55	2018	2018-02-06T20:45:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon Heavy
56	2018	2018-02-22T14:17:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	Spain	Satellite	Falcon 9
57	2018	2018-03-06T05:33:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Spain	Satellite	Falcon 9
58	2018	2018-03-30T14:13:51.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
59	2018	2018-04-02T20:30:41.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
60	2018	2018-04-18T22:51:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
61	2018	2018-05-11T20:14:00.000Z	t	ksc_lc_39a	KSC LC 39A	Bangladesh	Satellite	Falcon 9
62	2018	2018-05-22T19:47:58.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
63	2018	2018-06-04T04:45:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Luxembourg	Satellite	Falcon 9
64	2018	2018-06-29T09:42:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
65	2018	2018-07-22T05:50:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Canada	Satellite	Falcon 9
66	2018	2018-07-25T11:39:26.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
67	2018	2018-08-07T05:18:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Indonesia	Satellite	Falcon 9
68	2018	2018-09-10T04:45:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Canada	Satellite	Falcon 9
69	2018	2018-10-08T02:22:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	Argentina	Satellite	Falcon 9
70	2018	2018-11-15T20:46:00.000Z	t	ksc_lc_39a	KSC LC 39A	Qatar	Satellite	Falcon 9
71	2018	2018-12-03T18:34:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
72	2018	2018-12-05T18:16:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
73	2018	2018-12-23T13:51:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
74	2019	2019-01-11T15:31:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
75	2019	2019-02-22T01:45:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Indonesia	Satellite	Falcon 9
76	2019	2019-03-02T07:45:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Crew Dragon	Falcon 9
77	2019	2019-04-11T22:35:00.000Z	t	ksc_lc_39a	KSC LC 39A	Saudi Arabia	Satellite	Falcon Heavy
78	2019	2019-05-04T06:48:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
79	2019	2019-05-24T02:30:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
80	2019	2019-06-12T14:17:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	Canada	Satellite	Falcon 9
81	2019	2019-06-25T03:30:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon Heavy
82	2019	2019-07-25T22:01:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
83	2019	2019-08-06T22:52:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Israel	Satellite	Falcon 9
84	2019	2019-11-11T14:56:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
85	2019	2019-12-05T17:29:23.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
86	2019	2019-12-17T00:10:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Japan	Satellite	Falcon 9
87	2020	2020-01-07T02:19:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
88	2020	2020-01-19T14:00:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Crew Dragon	Falcon 9
89	2020	2020-01-29T14:06:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
90	2020	2020-02-17T15:05:55.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
91	2020	2020-03-07T04:50:31.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Dragon 1.1	Falcon 9
92	2020	2020-03-18T12:16:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
93	2020	2020-04-22T19:30:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
94	2020	2020-05-30T19:22:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Crew Dragon	Falcon 9
95	2020	2020-06-04T01:25:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
96	2020	2020-06-13T09:21:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
97	2020	2020-06-30T19:55:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
98	2020	2020-07-20T21:30:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	South Korea	Satellite	Falcon 9
99	2020	2020-08-07T05:12:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
100	2020	2020-08-18T14:31:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
101	2020	2020-08-30T23:18:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	Argentina	Satellite	Falcon 9
102	2020	2020-09-03T12:46:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
103	2020	2020-10-06T11:29:00.000Z	\N	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
104	2020	2020-10-18T12:25:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Satellite	Falcon 9
105	2020	2020-10-24T15:31:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
106	2020	2020-11-05T23:24:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
107	2020	2020-11-16T00:27:00.000Z	t	ksc_lc_39a	KSC LC 39A	United States	Crew Dragon	Falcon 9
108	2020	2020-11-21T17:17:00.000Z	t	vafb_slc_4e	VAFB SLC 4E	United States	Satellite	Falcon 9
109	2020	2020-10-24T15:31:00.000Z	t	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
110	2020	2020-12-06T16:17:00.000Z	\N	ksc_lc_39a	KSC LC 39A	United States	Dragon 2.0	Falcon 9
111	2020	2020-12-13T17:30:00.000Z	\N	ccafs_slc_40	CCAFS SLC 40	United States	Satellite	Falcon 9
\.


--
-- TOC entry 3001 (class 2606 OID 16475)
-- Name: launch_data launch_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.launch_data
    ADD CONSTRAINT launch_data_pkey PRIMARY KEY (flight_number);


-- Completed on 2021-04-23 16:55:36 EDT

--
-- PostgreSQL database dump complete
--
