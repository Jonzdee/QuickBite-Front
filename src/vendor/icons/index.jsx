import React from 'react'

export function IconGrid(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor"/>
      <rect x="13" y="3" width="8" height="8" rx="1.5" fill="currentColor" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" fill="currentColor"/>
      <rect x="13" y="13" width="8" height="8" rx="1.5" fill="currentColor"/>
    </svg>
  )
}

export function IconBell(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="currentColor"/>
      <path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"/>
    </svg>
  )
}

export function IconUser(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" fill="currentColor"/>
      <path d="M4 20a8 8 0 0116 0v1H4v-1z" fill="currentColor"/>
    </svg>
  )
}

export function IconThreeDots(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="5" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="19" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

export function IconChevronLeft(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.162L12 18.896 4.666 23.16l1.4-8.162L.132 9.21l8.2-1.192z" fill="currentColor"/>
    </svg>
  )
}

export function IconCheck(props){
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M7 12.5l2.8 2.8L17 8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconMessage(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor"/>
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

