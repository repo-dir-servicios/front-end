import React from 'react'
import {Link} from 'react-router-dom'

/*
 h6 {
  color: red;
 }

 header {
  background-color: blue;
 }
*/
const styles = {
  h6: {
    color: 'red'
  },
  headerStyle: {
    backgroundColor: 'blue'
  }
};

const ContractPreviewView = ({
    id,
    service,
    client,
    notes,
    service_unit,
    provider,
    location,
    start_date,
    end_date,
    payment_method,
    comments,

    // actions
    cancel

}) => (

  <article className="ContractPreview" style={{ opacity: '0.5' }}>
            <header style={styles.headerStyle}>
                <h6 style={styles.h6}>
                    { service.name }
                </h6>

                <section className="ClientInfo">
                    <span>Cliente:</span>
                    <span>
                        {
                            !! client &&
                            (client.first_names+" "+ client.last_names)
                        }
                    </span>
                </section>

                <section className="DateTime">
                    <div>
                        { new Date().toLocaleDateString() }
                    </div>
                    <div>
                        { new Date().toLocaleTimeString() }
                    </div>
                </section>
            </header>

            <footer>
                <Link to={`/contracts/${id}`}>
                    <button>
                        Ver
                    </button>
                </Link>



                <button onClick={()=>cancel(id)}>
                    Cancelar
                </button>

            </footer>
    </article>

)

export default ContractPreviewView;
