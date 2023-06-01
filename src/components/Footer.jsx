import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{marginTop: '10vh'}}>
      <hr/>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                TechnoShop
              </h6>

            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/category/Remeras' className='text-reset'>
                  Remeras
                </a>
              </p>
              <p>
                <a href='/category/Hoodies' className='text-reset'>
                  Hoodies
                </a>
              </p>
              <p>
                <a href='/category/Gorras' className='text-reset'>
                  Gorras
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>

            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Buenos Aires, Argentina
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                ctamanini@uba.com.ar
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='/'>
          TechnoShop.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer