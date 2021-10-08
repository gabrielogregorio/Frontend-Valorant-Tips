import React from "react";
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

export enum navbarEnum {
  Profile = '/Profile',
  PostCreate = '/PostCreate',
  ViewPosts = '/ViewPosts',
  Config = '/Config',
  EditScreen = '#',
  ReportScreen = '/Reports',
  SuggestionScreen = '/Suggestions'
}

interface NavbarProps {
  selected: navbarEnum
}

export const NavbarComponent = (props:NavbarProps) => {
  return (
    <nav className={styles.nav}>
      <ul>

        <Link
          className={styles.logo}
          to="/Profile">VAVATIPS</Link>


        <Link
          className={props.selected === navbarEnum.Profile ? styles.navActive : ""}
          to="/Profile">perfil</Link>

        <Link
          className={props.selected === navbarEnum.PostCreate ? styles.navActive : ""}
          to="/PostCreate">criar posts</Link>

        <Link
          className={props.selected === navbarEnum.ViewPosts ? styles.navActive : ""}
          to="/ViewPosts">posts</Link>

        <Link
          className={props.selected === navbarEnum.ReportScreen ? styles.navActive : ""}
          to="/Reports">reports</Link>

        <Link
          className={props.selected === navbarEnum.SuggestionScreen ? styles.navActive : ""}
          to="/Suggestions">sugestões</Link>

      </ul>
    </nav>
  )
}
