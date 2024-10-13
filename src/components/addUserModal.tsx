

const AddUserModal: React.FC = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-target="#staticBackdrop2">
                Launch modal register form
            </button>
            
            <div className="modal fade" id="staticBackdrop2" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog d-flex justify-content-center">
                    <div className="modal-content w-75">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Sign up</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                            <form>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="text" id="name2" className="form-control" />
                                    <label className="form-label" htmlFor="name2">Name</label>
                                </div>


                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="email" id="email2" className="form-control" />
                                    <label className="form-label" htmlFor="email2">Email address</label>
                                </div>


                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input type="password" id="password2" className="form-control" />
                                    <label className="form-label" htmlFor="password2">Password</label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserModal;