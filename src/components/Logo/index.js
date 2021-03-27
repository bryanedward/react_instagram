import React from "react"
import {Svg} from './style'

export const Logo = (props) =>  (
    <Svg
      width={353.965}
      height={122.021}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="73.017 13.989 353.965 122.021"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-shiny-gradient"
          x1={0.043}
          x2={0.957}
          y1={0.297}
          y2={0.703}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffb200" />
          <stop offset={0.5} stopColor="#e10057" />
          <stop offset={1} stopColor="#5A1A80" />
        </linearGradient>
        <linearGradient
          id="prefix__editing-shiny-gradient2"
          x1={0}
          x2={0}
          y1={0}
          y2={1}
        >
          <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
          <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter
          id="prefix__editing-shiny2"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feMorphology radius={2} />
        </filter>
        <filter
          id="prefix__editing-shiny"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#fff" result="flood" />
          <feConvolveMatrix
            in="SourceGraphic"
            result="conv"
            order="8,8"
            divisor={1}
            kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
          />
          <feOffset dy={4} in="conv" result="offset" />
          <feComposite operator="in" in="flood" in2="offset" result="comp" />
          <feGaussianBlur in="offset" stdDeviation={3} result="shadow" />
          <feColorMatrix
            in="shadow"
            values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
            result="dark-shadow"
          />
          <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
          <feOffset dy={2} in="conv" result="offset-2" />
          <feComposite
            operator="out"
            in="offset"
            in2="offset-2"
            result="edge-diff"
          />
          <feGaussianBlur in="edge-diff" stdDeviation={1} result="edge-blur" />
          <feColorMatrix
            in="edge-blur"
            result="edge-shadow"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feComposite
            operator="in"
            in="edge-shadow"
            in2="offset"
            result="edge-shadow-in"
          />
          <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
          <feMerge result="out">
            <feMergeNode in="offset-shadow" />
            <feMergeNode in="comp" />
            <feMergeNode in="edge-shadow-final" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-shiny)">
        <path
          d="M28.42-9.86q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51Q7.74-.32 5.63-.32q-2.11 0-2.94.1Q1.86-.13.51 0l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2H30.4q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.79 0-4.51-.64-1.73-.64-1.92-.83L15.55-6.98q1.54.2 4.42.2 4.93 0 8.45-3.08zm22.4 6.34q-1.99 4.8-8.32 4.8-3.2 0-5.25-2.24-1.67-1.86-1.67-3.97 0-4.8 2.24-15.29L42.5-44.8l12.99-1.28-6.21 32.38q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm38.78-30.4q2.3 0 4.1.51.06-.25.19-.96l.32-1.98q.25-1.28.64-3.39l1.02-5.06 12.74-1.28-7.11 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.71 1.06 1.86 1.06Q102.72-.38 98.82.9q-1.35.38-3.24.38-1.88 0-3.61-.99t-2.24-2.66Q88.7-.7 86.66.29q-2.05.99-5.03.99-2.97 0-5.44-.77-2.46-.77-4-2.43-2.81-3.26-2.81-10.69 0-9.6 5.63-15.42 5.63-5.89 14.59-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.02-5.44l3.45-18.75q-1.34-1.15-3.71-1.15zm23.07 28.16q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zM176.7 1.28q-7.74 0-7.74-6.02.06-1.66.58-4.48l1.15-5.88q1.73-8.32 1.73-10.18 0-3.71-2.18-3.71-3.65 0-5.57 9.53L160.9 0l-12.87 1.28 6.66-33.98 10.49-1.22-1.02 6.27q3.01-6.27 12.22-6.27 4.48 0 6.37 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25-.96 4.16-.96 5.73 0 1.56.87 2.46.86.9 2.14 1.02Q184-1.28 181.79 0q-2.21 1.28-5.09 1.28zm14.08-7.68q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm47.75-4.42q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11t-7.01-.96q-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63z"
          fill="url(#prefix__editing-shiny-gradient)"
          transform="translate(127.505 98.672)"
        />
      </g>
      <g filter="url(#prefix__editing-shiny2)">
        <path
          d="M28.42-9.86q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51Q7.74-.32 5.63-.32q-2.11 0-2.94.1Q1.86-.13.51 0l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2H30.4q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.79 0-4.51-.64-1.73-.64-1.92-.83L15.55-6.98q1.54.2 4.42.2 4.93 0 8.45-3.08zm22.4 6.34q-1.99 4.8-8.32 4.8-3.2 0-5.25-2.24-1.67-1.86-1.67-3.97 0-4.8 2.24-15.29L42.5-44.8l12.99-1.28-6.21 32.38q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm38.78-30.4q2.3 0 4.1.51.06-.25.19-.96l.32-1.98q.25-1.28.64-3.39l1.02-5.06 12.74-1.28-7.11 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.71 1.06 1.86 1.06Q102.72-.38 98.82.9q-1.35.38-3.24.38-1.88 0-3.61-.99t-2.24-2.66Q88.7-.7 86.66.29q-2.05.99-5.03.99-2.97 0-5.44-.77-2.46-.77-4-2.43-2.81-3.26-2.81-10.69 0-9.6 5.63-15.42 5.63-5.89 14.59-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.02-5.44l3.45-18.75q-1.34-1.15-3.71-1.15zm23.07 28.16q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zM176.7 1.28q-7.74 0-7.74-6.02.06-1.66.58-4.48l1.15-5.88q1.73-8.32 1.73-10.18 0-3.71-2.18-3.71-3.65 0-5.57 9.53L160.9 0l-12.87 1.28 6.66-33.98 10.49-1.22-1.02 6.27q3.01-6.27 12.22-6.27 4.48 0 6.37 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25-.96 4.16-.96 5.73 0 1.56.87 2.46.86.9 2.14 1.02Q184-1.28 181.79 0q-2.21 1.28-5.09 1.28zm14.08-7.68q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm47.75-4.42q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11t-7.01-.96q-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63z"
          fill="url(#prefix__editing-shiny-gradient2)"
          transform="translate(127.505 98.68)"
        />
      </g>
      <style />
    </Svg>
  )