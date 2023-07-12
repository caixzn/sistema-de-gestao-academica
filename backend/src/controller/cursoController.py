import sqlalchemy.orm as _orm
from typing import List
from http import HTTPStatus
import fastapi as _fastapi
from .interface import ICursoController as _ICursoController
from ..dao import cursoDAO as _cursoDAO
from ..schemas import cursoSchema as _cursoSchema
from ..models import curso as _cursoModel


class CursoController(_ICursoController.ICursoController):
    def __init__(self):
        super().__init__()
        self.curso_dao = _cursoDAO.CursoDAO()

    # TODO: Implementar Erros
    def inserir(self, db: _orm.Session, curso: _cursoSchema.CursoCreate):
        db_curso = _cursoModel.Curso(**curso.dict())
        try:
            curso = self.curso_dao.inserir(db=db, curso=db_curso)
        except Exception as e:
            pass
        return curso

    def atualizar(self, db: _orm.Session, curso: _cursoSchema.CursoCreate):
        curso = _cursoModel.Curso(**curso.dict())
        if curso is None:
            raise _fastapi.HTTPException(
                status_code=404, detail="Curso não encontrado")
        try:
            curso = self.curso_dao.atualizar(db, curso)
        except Exception as e:
            pass
        return curso

    def remover(self, db: _orm.Session, curso_id: int):
        try:
            return self.curso_dao.remover(db, curso_id)
        except Exception as e:
            pass

    def buscar(self, db: _orm.Session, curso_id: int):
        return self.curso_dao.buscar(db=db, curso_id=curso_id)

    def buscarTodos(self, db: _orm.Session):
        return self.curso_dao.buscarTodos(db)

    def buscarCursoPorNome(self, db: _orm.Session, curso_nome: str):
        curso_db: _cursoModel.Curso = self.curso_dao.buscarCursoPorNome(
            db=db, curso_nome=curso_nome)
        # if curso_db is None:
        #     raise _fastapi.HTTPException(
        #         status_code=HTTPStatus.NO_CONTENT.value, detail=HTTPStatus.NO_CONTENT.phrase)
        return curso_db
