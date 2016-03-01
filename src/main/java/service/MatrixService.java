package service;

import matrix.Matrix;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by Artyom on 01.03.2016.
 */
public class MatrixService {
    public EntityManager entityManager = Persistence.createEntityManagerFactory("MYMATRICES").createEntityManager();

    public Matrix add(Matrix matrix){
        entityManager.getTransaction().begin();
        Matrix matrixFromDB = entityManager.merge(matrix);//generates INSERT or UPDATE in case of obj state
        entityManager.getTransaction().commit();
        return matrixFromDB;
    }

    public void deleteById (int id){
        entityManager.getTransaction().begin();
        entityManager.remove(getById(id));
        entityManager.getTransaction().commit();
    }

    public Matrix getById(int id){
        return entityManager.find(Matrix.class, id);
    }

    /*public void update(Matrix matrix){
        entityManager.getTransaction().begin();
        entityManager.merge(matrix);
        entityManager.getTransaction().commit();
    }*/

    public List<Matrix> getAll(){
        TypedQuery<Matrix> namedQuery = entityManager.createNamedQuery("Matrix.getAll",Matrix.class);
        return namedQuery.getResultList();
    }
}
